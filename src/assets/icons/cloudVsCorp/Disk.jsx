export const CloudVsCorpDisk = ({ isBlue = false, ...props }) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2100_269845)">
        <path d="M35 0H0V35H35V0Z" fill="white" fillOpacity="0.01" />
        <path
          d="M32.0832 21.1456H2.9165V30.6248H32.0832V21.1456Z"
          stroke={isBlue ? '#04bbd3' : '#D3C879'}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M25.8857 27.7087C26.8924 27.7087 27.7086 26.8925 27.7086 25.8858C27.7086 24.879 26.8924 24.0629 25.8857 24.0629C24.8789 24.0629 24.0627 24.879 24.0627 25.8858C24.0627 26.8925 24.8789 27.7087 25.8857 27.7087Z"
          fill={isBlue ? '#04bbd3' : '#D3C879'}
        />
        <path
          d="M2.9165 21.1447L6.59032 3.64417H28.4523L32.0832 21.1447"
          stroke={isBlue ? '#04bbd3' : '#D3C879'}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7.2915 25.8853H19.6873"
          stroke={isBlue ? '#04bbd3' : '#D3C879'}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2100_269845">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
