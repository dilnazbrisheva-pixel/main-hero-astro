export const CloudVsCorpCheck = ({ isBlue = false, ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2100_269880)">
        <path
          d="M7.50011 13.475L4.02511 10L2.84595 11.1792L7.50011 15.8333L17.5001 5.83334L16.3209 4.65417L7.50011 13.475Z"
          fill={isBlue ? '#04bbd3' : '#D3C879'}
        />
      </g>
      <defs>
        <clipPath id="clip0_2100_269880">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
