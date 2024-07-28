import Card from "../../main shop/Card";
import rate4 from "../../../../assets/rate49.png";
import rate5 from "../../../../assets/rate5.png";
import star from "../../../../assets/four-star2.png";

export default function Reviews() {
  return (
    <div>
      <Card>
        <h6>Reviews</h6>
        <div className="flex items-start">
          <img src={rate4} alt={rate4} />
          <img src={rate5} alt={rate5} />
        </div>
        <section>
          <div>
            <span>PN</span>
            <div>
              <span>Profile Name</span>
              <span>May 1, 2024</span>
            </div>
          </div>
          <div>
            <img src={star} alt={star} />
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>
        </section>
      </Card>
    </div>
  );
}
