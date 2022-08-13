import ProfilePicture from '../images/user_profile.jpg';

function UserProfile() {
    return (
        <div className="userProfile card-shadow w-[30%] rounded-lg font-nunito p-4">
            <h1 className="featured-title font-bold text-lg text-[#999]">Information</h1>

            <div className="profile flex flex-col justify-center items-center mt-4">
                <img className="profile-photo w-24 h-24 rounded-full" src={ProfilePicture} alt="Profile pic" /> 

                <h3 className="userName text-3xl font-medium mt-6">John Doe</h3>

                <div className="meta-info mt-6 text-center">
                    <p className="text-[#727272]">Email: john.doe.24@gmail.com</p>
                    <p className="text-[#727272] mt-2">Phone: +1 729 181 229</p>
                    <p className="text-[#727272] mt-2">Address: Elton St. 234 Garden, <br></br>Yd. New York</p>
                    <p className="text-[#727272] mt-2">Country: USA</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;