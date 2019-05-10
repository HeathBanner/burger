
var pageIndex = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var currentPageGlobal = 1;


$(".burgerz").on('click', function() {
    var id = $(this).attr('data-id');
    var burger = {
        burger: 1
    };
    $.ajax({
        url: '/burgers/' + id,
        method: 'PUT',
        data: burger
    }).then(function(res) {
        location.reload();
    });
});

$(".trash").on('click', function() {
    var id = $(this).attr('data-id');
    $.ajax({
        url: '/burgers/' + id,
        method: 'DELETE',
    }).then(function(res) {
        location.reload();
    });
});

$('#freshNext').on('click', function() {
    var currentPageIndex = pageIndex[currentPageGlobal];
    var totalFreshPagesIndex = $('#burger-icon').attr('data-totalfreshpages');
    var totalFreshPagesNum = pageIndex.indexOf(totalFreshPagesIndex);

    var nextPageNum = currentPageGlobal + 1;
    var nextPageIndex = pageIndex[nextPageNum];

    console.log(currentPageGlobal);
    console.log(nextPageIndex);
    console.log(totalFreshPagesNum);

    if (currentPageGlobal === totalFreshPagesNum) {
        console.log("You're at the furthest frontwards page!");
    } else if (currentPageGlobal < totalFreshPagesNum) {
        console.log('FIRE');
        $('.fresh' + currentPageIndex).css({
            display: 'none'
        });
        $('.fresh' + nextPageIndex).css({
            display: 'block'
        });
        currentPageGlobal++;
        console.log("GLOBAL" + currentPageGlobal);
    } else {
        console.log('are ya kidding me');
    }
});

$('#freshPrevious').on('click', function() {
    var currentPageIndex = pageIndex[currentPageGlobal];
    var totalFreshPagesIndex = $('#burger-icon').attr('data-totalfreshpages');
    var totalFreshPagesNum = pageIndex.indexOf(totalFreshPagesIndex);
    
    var prevPageNum = currentPageGlobal - 1;
    var prevPageIndex = pageIndex[prevPageNum];

    console.log(currentPageGlobal);
    console.log(currentPageIndex);
    console.log(totalFreshPagesNum);
    
    if (currentPageGlobal === 1) {
        console.log("You're at the furthest back page!");
    } else if (currentPageGlobal <= totalFreshPagesNum) {
        $('.fresh' + currentPageIndex).css({
            display: 'none'
        });
        $('.fresh' + prevPageIndex).css({
            display: 'block'
        });
        currentPageGlobal--;
        console.log("GLOBAL" + currentPageGlobal);
    }
});

$('#devouredNext').on('click', function() {
    var currentPageIndex = pageIndex[currentPageGlobal];
    var totalDevPagesIndex = $('#burger-icon').attr('data-totaldevpages');
    var totalDevPagesNum = pageIndex.indexOf(totalDevPagesIndex);

    var nextPageNum = currentPageGlobal + 1;
    var nextPageIndex = pageIndex[nextPageNum];

    console.log(currentPageGlobal);
    console.log(nextPageIndex);
    console.log(totalDevPagesNum);

    if (currentPageGlobal === totalDevPagesNum) {
        console.log("You're at the furthest frontwards page!");
    } else if (currentPageGlobal < totalDevPagesNum) {
        console.log('FIRE');
        $('.devoured' + currentPageIndex).css({
            display: 'none'
        });
        $('.devoured' + nextPageIndex).css({
            display: 'block'
        });
        currentPageGlobal++;
        console.log("GLOBAL" + currentPageGlobal);
    } else {
        console.log('are ya kidding me');
    }
});

$('#devouredPrevious').on('click', function() {
    var currentPageIndex = pageIndex[currentPageGlobal];
    var totalDevPagesIndex = $('#burger-icon').attr('data-totaldevpages');
    var totalDevPagesNum = pageIndex.indexOf(totalDevPagesIndex);
    
    var prevPageNum = currentPageGlobal - 1;
    var prevPageIndex = pageIndex[prevPageNum];

    console.log(currentPageGlobal);
    console.log(currentPageIndex);
    console.log(totalDevPagesNum);
    
    if (currentPageGlobal === 1) {
        console.log("You're at the furthest back page!");
    } else if (currentPageGlobal <= totalDevPagesNum) {
        $('.fresh' + currentPageIndex).css({
            display: 'none'
        });
        $('.fresh' + prevPageIndex).css({
            display: 'block'
        });
        currentPageGlobal--;
        console.log("GLOBAL" + currentPageGlobal)
    }
});