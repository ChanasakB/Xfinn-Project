

function EditIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill={props.color}
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_913_1387)">
        <path
          fill='currentColor'
          d="M0 2.222C0 .997.997 0 2.222 0h5.556v4.444a1.11 1.11 0 001.11 1.112h4.445V9.92l-3.014 3.014a2.763 2.763 0 00-.729 1.292l-.649 2.6c-.08.32-.063.653.045.955H2.222A2.224 2.224 0 010 15.56V2.222zm13.333 2.222H8.89V0l4.444 4.444zm5.757 3.74l.5.5c.542.542.542 1.42 0 1.965l-1.02 1.021-2.466-2.465 1.021-1.021a1.392 1.392 0 011.965 0zm-8.26 6.295l4.486-4.486 2.465 2.465-4.486 4.483a1.1 1.1 0 01-.517.292l-2.087.52a.55.55 0 01-.528-.145.55.55 0 01-.146-.528l.521-2.087c.049-.194.15-.375.292-.517v.003z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_913_1387">
          <path fill="#fff" d="M0 0H20V17.778H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default EditIcon;