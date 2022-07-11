using Streamish.Models;
using System.Collections.Generic;


namespace Streamish.Repostiories

{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        UserProfile GetByIdWithVideos(int id);
        void Add(UserProfile userProfile);
        void Update(UserProfile userProfile);
        void Delete(int id);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}
