// parameter list is for array, list or object.
// parameter pageNum is for the number of the page
// parameter numForPage is for the division of the list. EXAMPLE: if you want show 3 items for page, then this parameter is 3.
export default function Pagination(list, pageNum, numForPage) {
    let numPages = (Math.trunc(list.length/numForPage)) + (list.length%numForPage);
    if(pageNum > numPages){
        pageNum = 1;
    }
    if(pageNum < 1){
        pageNum = numPages;
    }
    let pageMaxRange = pageNum * numForPage;
    let pageMinRange = (pageNum - 1) * numForPage;
    let listForPage = [];
    if(pageMaxRange > list.length){
        pageMaxRange = list.length;
    }
        for(pageMinRange; pageMinRange < pageMaxRange; pageMinRange++)
        {
    listForPage.push(list[pageMinRange]);
        }
        return listForPage;
}
// AUTHOR: DDKHAOS