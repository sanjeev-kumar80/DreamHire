import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I apply for a job?",
    answer:
      "Create your account, complete your profile, and click the Apply button on any job or internship.",
  },
  {
    question: "Is DreamHire free for students?",
    answer:
      "Yes. DreamHire is completely free for students to search and apply for opportunities.",
  },
  {
    question: "Can recruiters post jobs?",
    answer:
      "Yes. Recruiters can create an account and post jobs, internships and hiring events.",
  },
  {
    question: "Will I receive job alerts?",
    answer:
      "Yes. Once notifications are enabled, you'll receive updates for matching opportunities.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-500 text-lg">
            Everything you need to know about DreamHire.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;