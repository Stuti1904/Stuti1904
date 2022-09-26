using Bookstore.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Bookstore.Services
{
    public interface IJWTManagerRepository
    {

        Token Authenticate(User user, string role);
    }

    public class JWTManagerRepository : IJWTManagerRepository
    {
        private readonly IConfiguration configuration;
        private bookstoreContext context;


        public JWTManagerRepository(IConfiguration con)
        {
            configuration = con;
            context = new bookstoreContext();
        }
        public Token Authenticate(User user, string Role)
        {
            List<User> userlist = context.Users.Select(x => x).ToList();
            if (!userlist.Any(x => x.UserName == user.UserName && x.Password == user.Password))
            {
                return null;
            }

            else
            {
                if (string.IsNullOrEmpty(Role))
                {
                    if (!userlist.Any(x => x.UserName == user.UserName  && x.Password == user.Password))
                    {
                        return null;
                    }
                    var tempuser = userlist.Where(x => x.UserName == user.UserName && x.Password == user.Password).First();

                    Role = tempuser.Role;
                    
                }

                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.UTF8.GetBytes(configuration["JWT:Key"]);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                  {

                        new Claim(ClaimTypes.Name, user.UserName),
                        new Claim(ClaimTypes.Role, Role)
                  }),
                    Expires = DateTime.UtcNow.AddMinutes(30),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescriptor);
                return new Token { Tokens = tokenHandler.WriteToken(token), Role = Role };
            }
        }
    }
}
