import React from 'react';

class Ship extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="cart_extra cart_extra_1">
                    <div className="cart_extra_content cart_extra_coupon">
                        <div className="cart_extra_title">Coupon code</div>
                        <div className="coupon_form_container">
                            <form action="#" id="coupon_form" className="coupon_form">
                                <input type="text" className="coupon_input" required="required" />
                                <button className="coupon_button">apply</button>
                            </form>
                        </div>
                        <div className="coupon_text">Phasellus sit amet nunc eros. Sed nec congue tellus. Aenean nulla nisl, volutpat blandit lorem ut.</div>
                        <div className="shipping">
                            <div className="cart_extra_title">Shipping Method</div>
                            <ul>
                                <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                                    <label className="radio_container">
                                        <input type="radio" id="radio_1" name="shipping_radio" className="shipping_radio" />
                                        <span className="radio_mark" />
                                        <span className="radio_text">Next day delivery</span>
                                    </label>
                                    <div className="shipping_price ml-auto">$4.99</div>
                                </li>
                                <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                                    <label className="radio_container">
                                        <input type="radio" id="radio_2" name="shipping_radio" className="shipping_radio" />
                                        <span className="radio_mark" />
                                        <span className="radio_text">Standard delivery</span>
                                    </label>
                                    <div className="shipping_price ml-auto">$1.99</div>
                                </li>
                                <li className="shipping_option d-flex flex-row align-items-center justify-content-start">
                                    <label className="radio_container">
                                        <input type="radio" id="radio_3" name="shipping_radio" className="shipping_radio" defaultChecked />
                                        <span className="radio_mark" />
                                        <span className="radio_text">Personal Pickup</span>
                                    </label>
                                    <div className="shipping_price ml-auto">Free</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ship;