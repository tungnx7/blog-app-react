import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img className="post-img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit labore optio id, eum sit debitis. Minus repellendus, harum consequuntur architecto quisquam sed fugiat facere, hic, laborum incidunt officiis perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit labore optio id, eum sit debitis. Minus repellendus, harum consequuntur architecto quisquam sed fugiat facere, hic, laborum incidunt officiis perspiciatis!Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur suscipit labore optio id, eum sit debitis. Minus repellendus, harum consequuntur architecto quisquam sed fugiat facere, hic, laborum incidunt officiis perspiciatis!</p>
    </div>
  );
}
