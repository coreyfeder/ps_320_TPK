import { useState } from "react";

export default function MarchingOrder({ party }) {
  return (
    <>
      <div className="marchingOrderTitle">Marching Order</div>
      <div className="marchingOrder">
        {party.map((member) => {
          // return member.name;
          // return {`{member.name}: {member.health}`};
          return <MarchingOrderMember member={member} />;
          // return <PartyMember key={member.name} member={member} />;
        })}
      </div>
    </>
  );
}

function MarchingOrderMember({ member }) {
  const r = ((100 - member.health) / 100) * 200;
  const g = (member.health * 200) / 100;

  return (
    <div className="marchingOrderMember">
      <small>{member.name}</small>
      <br />
      <x-small style={{ color: `rgb(${r}, ${g}, 0)` }}>{member.health}</x-small>
    </div>
  );
  //   return (
  //     <>
  //       <div style={{ width: "100%", textAlign: "center", marginBottom: "0px" }}>
  //         {/* <b>{member.name}</b> */}One Hero
  //       </div>
  //       {/* <div style={{ width: "100%", textAlign: "center", marginBottom: "10px" }}>
  //         <small
  //           style={{ color: `rgb(${r}, ${g}, 0)` }}
  //         >
  //           {member.health}
  //         <span style={{ color: `rgb(${r}, ${g}, 0)` }}>{member.health}%</span>
  //         </small>
  //       </div> */}
  //     </>
  //   );
}
