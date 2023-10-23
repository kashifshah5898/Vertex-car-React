import React, { useState } from "react";
import {
  MinusOutlined,
  PlusOutlined,
  UserOutlined,
  MailOutlined,
  EditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import "./Questions.css";

function Questions() {
  const [activeFilters, setActiveFilters] = useState({});

  const handleFilterClick = (filterId) => {
    if (activeFilters === filterId) {
      setActiveFilters("");
    } else {
      setActiveFilters(filterId);
    }
  };

  return (
    <div className="Question-main">
      <div className="question-heading">Frequently Asked Questions</div>
      <section className="Question-wrap">
        <div className="question-left">
          <div
            className="filter-option-heading"
            onClick={() => handleFilterClick("filter1")}
          >
            <p> What do I need to hire a car?</p>
            <div className="question-icons">
              {activeFilters === "filter1" ? (
                <MinusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              ) : (
                <PlusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              )}
            </div>
          </div>

          <div
            className={`filter-option-content ${
              activeFilters === "filter1" ? "open" : ""
            }`}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
              accusamus aliquid at, aut cumque cupiditate delectus dignissimos
            </p>
            <ul>
              <li>Mus accumsan venenatis hac</li>
              <li>Curabitur per quis parturient vel ut</li>
            </ul>
          </div>

          {/* Add more filter headings and contents as needed */}

          <div
            className="filter-option-heading"
            onClick={() => handleFilterClick("filter2")}
          >
            <p> How old do I have to be to rent a car?</p>
            <div className="question-icons">
              {activeFilters === "filter2" ? (
                <MinusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              ) : (
                <PlusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              )}
            </div>
          </div>

          <div
            className={`filter-option-content ${
              activeFilters === "filter2" ? "open" : ""
            }`}
          >
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          <div
            className="filter-option-heading"
            onClick={() => handleFilterClick("filter3")}
          >
            <p> Can I book a hire car for someone else?</p>
            <div className="question-icons">
              {activeFilters === "filter3" ? (
                <MinusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              ) : (
                <PlusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              )}
            </div>
          </div>

          <div
            className={`filter-option-content ${
              activeFilters === "filter3" ? "open" : ""
            }`}
          >
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
          <div
            className="filter-option-heading"
            onClick={() => handleFilterClick("filter4")}
          >
            <p>How do I find the cheapest car hire deal?</p>
            <div className="question-icons">
              {activeFilters === "filter4" ? (
                <MinusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              ) : (
                <PlusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              )}
            </div>
          </div>

          <div
            className={`filter-option-content ${
              activeFilters === "filter4" ? "open" : ""
            }`}
          >
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          <div
            className="filter-option-heading"
            onClick={() => handleFilterClick("filter5")}
          >
            <p> What should I look for when I’m choosing a car?</p>
            <div className="question-icons">
              {activeFilters === "filter5" ? (
                <MinusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              ) : (
                <PlusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              )}
            </div>
          </div>

          <div
            className={`filter-option-content ${
              activeFilters === "filter5" ? "open" : ""
            }`}
          >
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          <div
            className="filter-option-heading"
            onClick={() => handleFilterClick("filter6")}
          >
            <p> Are all fees included in the rental price?</p>
            <div className="question-icons">
              {activeFilters === "filter6" ? (
                <MinusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              ) : (
                <PlusOutlined
                  style={{
                    backgroundColor: "#a1e600",
                    padding: "2%",
                    borderRadius: "50px",
                    color: "white",
                  }}
                />
              )}
            </div>
          </div>
          <div
            className={`filter-option-content ${
              activeFilters === "filter6" ? "open" : ""
            }`}
          >
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>

          {/* ... Repeat similar sections for other filters */}
        </div>
        <div className="question-form-right">
          <div className="form-main">
            <div className="form-heading">Still have questions?</div>
            <div className="label">
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="input">
              <input type="text" id="name" placeholder="Your Name" />
              <UserOutlined className="input-icon" />
            </div>
            <div className="label">
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="input">
              <input type="email" id="email" placeholder=" Email Address" />
              <MailOutlined className="input-icon" />
            </div>
            <div className="label">
              <label htmlFor="message">Message</label>
            </div>
            <div className="input">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Write your message"
              ></textarea>
              <EditOutlined className="input-icon-textarea" />
            </div>
            <div className="form-button">
              <button>
                Send Message
                <ArrowRightOutlined style={{marginLeft:"5px"}}/>
              </button>
            </div>
          </div>
        </div>
        <svg class="cta-svg" viewBox="0 0 500 150" preserveAspectRatio="none"><path d="M-31.31,170.22 C164.50,33.05 334.36,-32.06 547.11,196.88 L500.00,150.00 L0.00,150.00 Z"></path></svg>

      </section>
    </div>
  );
}

export default Questions;
