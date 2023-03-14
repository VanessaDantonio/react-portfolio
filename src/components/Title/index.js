//import "./style.css";

function title() {
  return(
    <div className="row">
      <div className="col-12">
        <div className="setion-title text-center" data-aos="fade-up" data-aos-delay="100">
          <h2>{props.name}</h2>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default title;