const Avatar = ({ url, className }) => {
  return (
    <img
      className={`h-8 transform cursor-pointer rounded-full transition duration-150 hover:scale-105 ${className}`}
      loading="lazy"
      src={url}
      alt="avatar pic"
    />
  )
}

export default Avatar
