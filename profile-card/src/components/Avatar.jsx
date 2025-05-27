import avatar from "../assets/profile_pic.png";
const Avatar = () => {
  return (
    <div className="avatar">
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
  );
};
export default Avatar;
