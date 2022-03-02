import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="wrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlepost-img"
        />
        <h1 className="singlepost-title">
          Lorem ipsum dolor sit amet
          <div className="singlepost-edit">
            <i className="singlepost-icon fa-solid fa-pen-to-square"></i>
            <i className="singlepost-icon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlepost-info">
          <span className="singlepost-author">
            Author: <b>Safak</b>{" "}
          </span>
          <span className="singlepost-date">1 hour ago </span>
        </div>
        <p className="singlepost-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
          fugiat molestiae nesciunt voluptatum atque, ab voluptatem corrupti
          magni aspernatur perferendis, temporibus tempora placeat in possimus
          vitae pariatur, quam recusandae!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cumque ut fugiat molestiae nesciunt voluptatum
          atque, ab voluptatem corrupti magni aspernatur perferendis, temporibus
          tempora placeat in possimus vitae pariatur, quam recusandaeLorem ipsum
          dolor sit amet consectetur adipisicing elit. Cumque ut fugiat
          molestiae nesciunt voluptatum atque, ab voluptatem corrupti magni
          aspernatur perferendis, temporibus tempora placeat in possimus vitae
          pariatur, quam recusandae
        </p>
      </div>
    </div>
  );
}
