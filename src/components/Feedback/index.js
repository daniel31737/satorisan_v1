import React from 'react'
import './style.scss';

export default function Feedback() {
    
    return (
        <div className="feedback">
            <form>
                <div className="label">
                    <label>Get Satorisan news</label>
                </div>
                <div className="frm-submit">
                    <input placeholder="Enter your email address" />
                    <button type="submit">Subscribe</button>
                </div>
                <div className="frm-checkbox">
                    <input type="checkbox" />
                    <label>I accept the terms and conditions and the privacy policy.</label>
                </div>
            </form>
            <hr />
        </div>
    )
}
