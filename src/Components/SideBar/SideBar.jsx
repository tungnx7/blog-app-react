import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-item">
            <span className="sidebar-title">ABOUT ME</span>
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae similique ad hic est deserunt quo impedit repellat consequatur sapiente voluptatum laboriosam, non nulla? Nesciunt delectus, et nihil rerum porro facere?</p>
        </div>
        <div className="sidebar-item">
            <span className="sidebar-title">CATEGORIES</span>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    Life
                </li>
                <li className="sidebar-list-item">
                    Music
                </li>
                <li className="sidebar-list-item">
                    Style
                </li>
                <li className="sidebar-list-item">
                    Sport
                </li>
                <li className="sidebar-list-item">
                    Tech
                </li>
                <li className="sidebar-list-item">
                    Cinema
                </li>
            </ul>
        </div>
        <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
        <i className="sidebar-icon fa-brands fa-facebook-square" ></i>
        <i className="sidebar-icon fa-brands fa-twitter-square" ></i>
        <i className="sidebar-icon fa-brands fa-pinterest-square" ></i>
        <i className="sidebar-icon fa-brands fa-instagram-square" ></i>
        </div>
        </div>
    </div>
  )
}
