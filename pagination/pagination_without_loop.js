const paginationContainer = document.getElementById("pagination-container");
const totalPages = 10;
let currentPage = 5;

function getActiveClass(page, currentPage) {
  return page == currentPage ? "active" :  "";
}

function getLeftArrowData(firstPage, currentPage) {
  let leftArrowData = -1;
  if (currentPage !== firstPage) {
    leftArrowData = currentPage - 1;
  }
  
  return leftArrowData;
}

function getRightArrowData(lastPage, currentPage) {
  let rightArrowData = -1;
  if (currentPage !== lastPage) {
    rightArrowData = currentPage + 1;
  }
  
  return rightArrowData;
}

function renderPagination() {
  const firstPage = 1;
  const lastPage = totalPages;
  const pages = new Set();
  
  pages.add(firstPage);
  pages.add(lastPage);
  pages.add(currentPage);
  
  if (currentPage - 1 > firstPage) {
    pages.add(currentPage - 1);
  }
  
  if (currentPage + 1 < lastPage) {
    pages.add(currentPage + 1);
  }
  
  if (currentPage === firstPage + 3) {
    pages.add(firstPage + 1);
  }
  
  if (currentPage === lastPage - 3) {
    pages.add(lastPage - 1);
  }
  
  const pagesArr = Array.from(pages).sort((a, b) => a - b);
  let lastPrintedPage = 0;
  const outputPages = [];
  
  const leftArrowData = getLeftArrowData(firstPage, currentPage);
  let leftArrowButton = `<a href="#" data-page="${leftArrowData}" class="btn btn-primary"><i class="bi bi-arrow-left"></i></a>`;
  outputPages.push(leftArrowButton);
  
  for (const index in pagesArr) {
    const page = pagesArr[index];
    const activeClass = getActiveClass(page, currentPage);
    
    if (page - lastPrintedPage > 1) {
      outputPages.push(`<a href="#" data-page="-1" class="btn btn-primary ${activeClass}">...</a>`);
    }
    
    outputPages.push(`<a href="#" data-page="${page}" class="btn btn-primary ${activeClass}">${page}</a>`);
    
    lastPrintedPage = page;
  }
  
  const rightArrowData = getRightArrowData(lastPage, currentPage);
  let rightArrowButton = `<a href="#" data-page="${rightArrowData}" class="btn btn-primary"><i class="bi bi-arrow-right"></i></a>`;
  outputPages.push(rightArrowButton);
  
  paginationContainer.innerHTML = outputPages.join('');
}

paginationContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  let btn = event.target.closest(".btn");
  if (btn) {
    currentPage = parseInt(btn.dataset.page);
    if (currentPage !== -1) {
      renderPagination();
    }
  }
  return false;
});

if (totalPages > 0) {
  console.time("withoutLoop");
  renderPagination();
  console.timeEnd("withoutLoop");
}