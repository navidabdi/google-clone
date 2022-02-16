const Avatar = ({ url }) => {
  return (
    <img
      className="h-10 transform cursor-pointer rounded-full transition duration-150 hover:scale-105"
      loading="lazy"
      src={url}
      alt="avatar pic"
    />
  )
}

export default Avatar
