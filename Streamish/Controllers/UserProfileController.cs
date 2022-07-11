﻿
using System;
using Microsoft.AspNetCore.Mvc;
using Streamish.Repositories;
using Streamish.Models;
using Streamish.Repostiories;
using Microsoft.AspNetCore.Authorization;

namespace Streamish.Controllers
{
    [Authorize]
   
        [Route("api/[controller]")]
        [ApiController]
        public class UserProfileController : ControllerBase
        {
            private readonly IUserProfileRepository _userProfileRepository;
            public UserProfileController(IUserProfileRepository userProfileRepository)
            {
                _userProfileRepository = userProfileRepository;
            }

            [HttpGet]
            public IActionResult Get()
            {
                return Ok(_userProfileRepository.GetAll());
            }

            [HttpGet("GetByIdWithVideos/{id}")]
            public IActionResult Get(int id)
            {
                var user = _userProfileRepository.GetByIdWithVideos(id);
                if (user == null)
                {
                    return NotFound();
                }
                return Ok(user);
            }

          

          
            [HttpPost]
            public IActionResult Post(FirebaseUser firebaseUser)
            {
                // NOTE: This is only temporary to set the UserProfileId until we implement login
                // TODO: After we implement login, use the id of the current user
                _userProfileRepository.Add(firebaseUser);
                return CreatedAtAction("Get", new { id = FirebaseUser }, firebaseUser);
            }


            [HttpPut("{id}")]
            public IActionResult Put(int id, UserProfile userProfile)
            {
                if (id != userProfile.Id)
                {
                    return BadRequest();
                }

                _userProfileRepository.Update(userProfile);
                return NoContent();
            }

            [HttpDelete("{id}")]
            public IActionResult Delete(int id)
            {
                _userProfileRepository.Delete(id);
                return NoContent();
            }

        }
    }



