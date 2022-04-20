export function renderAllCategoryItems(items) {
    let rows = [];
    items.forEach(item => {
        rows.push(<p>{item.name}</p>);
    });
    return rows;
}

export function toggleHidden(target) {
    document.getElementById(target).classList.toggle("hidden");
}
