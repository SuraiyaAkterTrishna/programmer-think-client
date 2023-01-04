import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div  className="hover:bg-white font-bold">
        <Link
         className="hover:bg-white"
          style={{color: match ? "#096BD8" : "#333333" , borderBottom: match ? "2px solid #096BD8" : "none" ,paddingBottom: "10px"}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  export default CustomLink;