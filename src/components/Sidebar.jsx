import avatar from "../assets/avatar.JPG";


const Sidebar = () => {
  return (
    <div className="sidebar col-md-2">
      <div className="sidebar-client-area">
          <img src={avatar} alt={avatar} />
          <span>کاربر: <span style={{color: "#007bff"}}>محمد طاهری</span>  </span>
      </div>
      <div className="text-center">
        <h4> کارتابل مکاتبات اداری </h4>
      </div>
      <div className="text-center sm-disposable">
        <h5>ورژن:</h5>
        <p>1.0.0</p>
        <h5>مجری : </h5>
        <p>مهندس محمد طاهری </p>
        <br />
        <p>زمستان 1400</p>
      </div>
    </div>
  );
};

export default Sidebar;
