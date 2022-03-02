import "./header.css";

export default function Header() {
  return (
    <div className="header">
        <div className="header-title">
            <span className="header-title-sm">React & Node</span>
            <span className="header-title-lg">Blog</span>
        </div>
        <img src="https://images.unsplash.com/photo-1569900008021-aa41936ba3df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="header-img" />
    </div>
  )
}
