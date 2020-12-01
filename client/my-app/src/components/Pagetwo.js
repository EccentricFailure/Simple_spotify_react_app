import React from 'react';
import './Pagetwo.scss';

const Content=() => {
  const data=(
    <div className="box">
        <h2>it worked </h2>
    </div>
  )

return (
    <main className="content">
        {data}
        {data}
        {data}
        {data}
        {data}
    </main>
  )
}
export default Content;