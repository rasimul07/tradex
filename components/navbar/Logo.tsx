import React from "react";
import Link from "next/link";


function Logo() {
  return (
    <Link href={"/"}>
      <img src="https://share1.cloudhq-mkt3.net/cce86d0594b1f5.png" alt="tradex logo" className="h-10 w-15"></img>
    </Link>
  );
}

export default Logo;
