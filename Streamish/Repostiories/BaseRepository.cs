using System;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace Streamish.Repositories
{
    //abstract is the class def, indicates BaseRep class cannot be directly instantiated but can only be used by inheritance
    //Private methods: when a particular method is only needed in one place, its better to just make it a private method of whatever class it's used in 

    public abstract class BaseRepository
    {
        private readonly string _connectionString;

        public BaseRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }
        //mark protected property to make class available to child classes, but inaccessible to any other code
        protected SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_connectionString);
            }
        }
    }
}