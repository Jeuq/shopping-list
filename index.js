function main() {

// add new item:
    $('#js-shopping-list-form').on('submit', function(evt) {
        evt.preventDefault();
        let listItem = $('#shopping-list-entry').val();
        console.log(listItem);
        let template = `<li>
            <span class = 'shopping-item'> ${listItem}</span>
            <div class = 'shopping-item-controls'>
            <button class = 'shopping-item-toggle'>
            <span class = 'button-label'>check</span>
            </button>
            <button class = 'shopping-item-delete'>
            <span class = 'button-label'>delete</span>
            </button>
            </div>
            </li>`;
        $('.shopping-list').append(template);
    });
}
main();


// toggle checked:
$('.shopping-list').on ('click', '.shopping-item-toggle', function (evt) {
    $(this).closest('li').find ('.shopping-item').toggleClass('.shopping-item_checked');
 });


 // delete: 
$('.shopping-list').on('click', '.shopping-list-delete', function (evt) {
    $(this).parent.remove()
});
