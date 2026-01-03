import React from 'react';

const Fqa = () => {
  return (
    <div className='max-w-[800px] py-10 mx-auto space-y-3 h-[500px]'>
      <h2 className="text-4xl font-bold text-center mb-10">
  Billing FAQs
</h2>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">
    How can I track my electricity bills?
  </div>
  <div className="collapse-content text-sm">
    You can add your electricity bills, set due dates, and track paid or unpaid status.
    Monthly expense analysis is also available.
  </div>
</div>

<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">
    Can I manage gas bills in this app?
  </div>
  <div className="collapse-content text-sm">
    Yes, you can manage gas bills separately with reminders,
    payment tracking, and monthly cost summaries.
  </div>
</div>

<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">
    How does internet bill reminder work?
  </div>
  <div className="collapse-content text-sm">
    Add your internet bill details and due date.
    You will receive reminder notifications before the payment deadline.
  </div>
</div>

<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">
    Can I track my water bills?
  </div>
  <div className="collapse-content text-sm">
    Yes, you can track water bills, view payment history,
    and monitor monthly water expenses easily.
  </div>
</div>
    </div>
  )
};

export default Fqa;