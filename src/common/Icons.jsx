export const Icon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill={circleFill} />
      <path
        d="M17.3333 17.2H19.2381L20 14H17.3333V12.4C17.3333 11.576 17.3333 10.8 18.8571 10.8H20V8.112C19.7516 8.0776 18.8137 8 17.8232 8C15.7547 8 14.2857 9.3256 14.2857 11.76V14H12V17.2H14.2857V24H17.3333V17.2Z"
        fill={pathFill}
      />
    </svg>
  );
};
