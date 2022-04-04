import React, { useState, useEffect, useRef } from 'react';
import "./MenuSecond.css"

export default function MenuSecond() {

    const MenuItems = [
    {
        name: "Hôtel information",
        slug: "information"
    },
    {
        name: "Voir sur la map",
        slug: "map"
    },
    {
        name: "Voir les photos",
        slug: "photos"
    },
    {
        name: "Avis",
        slug: "avis"
    }
    ];

    const MenuItem = (props) => {
    const { item, selected = false, onItemSelect } = props;

    return (
        <div
        className={`menuSecond-item ${selected ? "menuSecond-item--selected" : ""}`}
        data-slug={item.slug}
        onClick={() => {
            onItemSelect(item);
        }}
        >
        {item.name}
        </div>
    );
    };

    const Menu = (props) => {
    const { items, onSelectedItem, initialItemSlug = null } = props;
    const [selectedItem, setSelectedItem] = useState(null);
    const menuItemsRef = useRef();
    const selectedItemRef =
        menuItemsRef.current && selectedItem
        ? menuItemsRef.current.querySelector(`[data-slug=${selectedItem.slug}]`)
        : null;

    const calculateDashPosition = (element, dashWidth) => {
        return element.offsetLeft + element.offsetWidth / 2 - dashWidth / 2;
    };

    const calculateDashWidth = (element) => {
        return element.offsetWidth;
    };

    const dashWidth = selectedItemRef ? calculateDashWidth(selectedItemRef) : 0;

    const dashPosition = selectedItemRef
        ? calculateDashPosition(selectedItemRef, dashWidth)
        : 0;

    const selectItem = (item) => {
        setSelectedItem(item);
        onSelectedItem(item);
    };

    useEffect(() => {
        const initialItem = initialItemSlug
        ? items.find((item) => item.slug === initialItemSlug)
        : items[0];
        setSelectedItem(initialItem);
    }, []);

    const renderItems = items.map((item) => (
        <MenuItem
        item={item}
        selected={selectedItem && selectedItem.slug === item.slug}
        onItemSelect={selectItem}
        />
    ));

    return (
        <div className="menuSecond">
        <div className="menuSecond-items" ref={menuItemsRef}>
            {renderItems}
            <div
            className="menuSecond-dash"
            style={{
                width: dashWidth,
                transform: `translate3d(${dashPosition}px, 0 , 0)`
            }}
            />
        </div>
        </div>
    );
    };

}