import React from "react";
import Coin from "../Images/Coins.gif";
import Customization from "../Images/Customization.gif";
import Service from "../Images/Service.gif";

function Card() {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Customization}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Highly Customizable</h5>
              <p className="card-text">
                Experience language learning like never before with LinguaLink's
                highly customizable features. Tailor your learning journey to
                suit your unique needs and preferences. From choosing specific
                topics, adjusting difficulty levels, setting personalized goals,
                to selecting preferred conversation partners, our app puts you
                in control. Discover the power of customization with LinguaLink
                and unleash your full language learning potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">24/7 Service</h5>
              <p className="card-text">
                Experience language learning on your own terms with LinguaLink's
                24/7 service. Need assistance, practice, or a conversation
                partner at 2 am? We've got you covered. With round-the-clock
                access to our resources and dedicated support, you can learn at
                your own pace and convenience, making language learning a
                seamless part of your everyday life. Join LinguaLink and embrace
                the freedom of learning anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img src={Service} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: "800px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Coin} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Free Of Cost</h5>
              <p className="card-text">
                Unlock the power of language learning without breaking the bank.
                LinguaLink offers you an incredible language improvement
                experience, completely free of cost. No subscriptions, no hidden
                fees, just pure language learning enjoyment. We believe that
                language skills should be accessible to everyone, which is why
                we've made our app available to you at no cost. Embrace the
                freedom of learning with LinguaLink, where language skills come
                without a price tag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
