import React from 'react'
import Customer from '../customer/Customer'
import styles from './Customers.module.css'
import { BsFillChatRightQuoteFill } from "react-icons/bs";

const Customers = () => {
    let customers = [
        {
            id: 1,
            icon: <BsFillChatRightQuoteFill />,
            desc: 'Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!',
            name: '- Client Name, Location',
        },
        {
            id: 2,
            icon: <BsFillChatRightQuoteFill />,
            desc: 'Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!',
            name: '- Client Name, Location',
        }
    ];

    return (
        <div className={styles.customers}>
            <h2>Customer testimonials</h2>
            <p>Our customers love working with us</p>
            <div className={styles.customerstext}>
                {customers.map((customer) => (
                    <Customer
                        key={customer.id}
                        icon={customer.icon}
                        desc={customer.desc}
                        name={customer.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Customers;
