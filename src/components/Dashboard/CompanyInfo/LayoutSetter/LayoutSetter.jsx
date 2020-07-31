import React from 'react';

import styles from "./Layout.module.css"

function LayoutSetter(props) {
    const { title, items, additional } = props
    return (
        <section className={styles.layout_setter} >
            <h2> {title} </h2>
            <ul>
                {
                    items.map(item =><li key={items} > {item} </li>)
                }
            </ul>
            { additional }
        </section>
    );
}

export default LayoutSetter;