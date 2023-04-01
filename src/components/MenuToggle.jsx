const Path = (props) => (
    <path
      
      strokeWidth="3"
      
      strokeLinecap="round"
      {...props}
    />
  );
  
  export const MenuToggle = ({ toggle }) => (
    <button onClick={toggle} className="relative z-999 bg-[#83c5be] dark:bg-pink-600 w-[2.5em] h-[2.5em] flex justify-center items-center rounded-[50%] ">
      <svg width="23" height="18" viewBox="0 0 23 18" className="fill-white stroke-white">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );
  