import React from "react";
import "./String.css";

const Operation = ({ operation, title, subject }) => {
  return (
    <div className="string__operations">
      <h2 className="string__title">{title}</h2>
      <div className="operations__content">
        <h1 className="operation__subject">- {subject} :-</h1>
        <p className="operation__result">{operation}</p>
      </div>
    </div>
  );
};

function String() {
  const str = "Learnovate Ecommerce";
  const strTrim = "  Learnovate  ";
  const strPad = "5";
  return (
    <div className="string">
      <h1 className="string__header">String Methods and Properties</h1>
      <Operation operation={str.length} title="String Length" subject={str} />
      <Operation
        operation={str.slice(4, -10)}
        title="The Slice() method"
        subject={str}
      />
      <Operation
        operation={str.substr(0, 5)}
        title="The substring() Method"
        subject={str}
      />

      <Operation
        operation={str.replace("Ecommerce", "Academy")}
        title="Replacing String Content"
        subject={str}
      />

      <Operation
        operation={str.toUpperCase()}
        title="Converting to Uppercase"
        subject={str}
      />

      <Operation
        operation={str.toLowerCase()}
        title="Converting to Lowercase"
        subject={str}
      />

      <Operation
        operation={str.concat(" Internship")}
        title="The concat() Method"
        subject="Learnovate Ecommerce, internship"
      />

      <Operation
        operation={strTrim.trim()}
        title="String trim() method"
        subject="___Learnovate___"
      />

      <Operation
        operation={strPad.padStart(4, 0)}
        title="String Padding"
        subject={strPad}
      />

      <Operation
        operation={str.charAt(0)}
        title="The charAt() Method for 0 index"
        subject={str}
      />

      <Operation
        operation={str.charCodeAt(0)}
        title="The charCodeAt() Method for 0 index"
        subject={str}
      />
      <Operation
        operation={str.split(" ").slice(0, 1).join(" ")}
        title="Return First Word"
        subject={str}
      />

      <Operation
        operation={str.split(" ").slice(-1).join(" ")}
        title="Return Last Word"
        subject={str}
      />

      <Operation
        operation={str.indexOf("Ecommerce")}
        title="String.indexOf() Ecommerce"
        subject={str}
      />

      <Operation
        operation={str.lastIndexOf("novate")}
        title="String.lastIndexOf() novate"
        subject={str}
      />

      <Operation
        operation={str.search("Ecommerce")}
        title="String.search() Ecommerce"
        subject={str}
      />

      <Operation
        operation={str.includes("Ecommerce") ? "True" : "False"}
        title="String.includes() Ecommerce"
        subject={str}
      />

      <Operation
        operation={str.startsWith("Ecommerce") ? "True" : "False"}
        title="String.startWith() Ecommerce"
        subject={str}
      />
      <Operation
        operation={str.endsWith("Ecommerce") ? "True" : "False"}
        title="String.endWith() Ecommerce"
        subject={str}
      />
    </div>
  );
}

export default String;
