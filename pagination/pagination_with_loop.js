const paginationContainer = document.getElementById("pagination-container");
const totalPages = 10;
let currentPage = 5;

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

function getShouldShowPreviousDots(currentPage, i, firstDotStartAt, lastDotStartAt) {
  if (currentPage === firstDotStartAt + 2) {
    return false;
  }
  
  return currentPage > firstDotStartAt && firstDotStartAt === i;
}

function getShouldShowAfterDots(currentPage, i, lastDotStartAt) {
  if (currentPage === lastDotStartAt - 2) {
    return false;
  }
  
  return (currentPage < lastDotStartAt && lastDotStartAt === i);
}

function getActiveClass(page, currentPage) {
  return page == currentPage ? "active" :  "";
}

function getShouldShowPageButton(i, currentPage) {
  const previousOfCurrentPage = currentPage - 1;
  const afterOfCurrentPage = currentPage + 1;
  
  return i === previousOfCurrentPage 
  || i === currentPage 
  || i === afterOfCurrentPage;
}

function renderPagination() {
  const firstPage = 1;
  const lastPage = totalPages;
  console.log("Render pagination:", currentPage, "-", totalPages);
  // let output = "";
  let outputArr = [];
  
  // Left arrow button
  const leftArrowData = getLeftArrowData(firstPage, currentPage);
  let leftArrowButton = `<a href="#" data-page="${leftArrowData}" class="btn btn-primary"><i class="bi bi-arrow-left"></i></a>`;
  // output += leftArrowButton;
  outputArr.push(leftArrowButton);
  
  // Page number buttons
  const firstDotStartAt = 2;
  const lastDotStartAt = totalPages - 1;
  
  let activeClass = getActiveClass(firstPage, currentPage);
  const firstPageStr = `<a href="#" data-page="${firstPage}" class="btn btn-primary ${activeClass}">${firstPage}</a>`;
  outputArr.push(firstPageStr);
  
  for (let i = 2; i <= lastPage; i++) {
    activeClass = getActiveClass(i, currentPage);
    
    const shouldShowPreviousDots = getShouldShowPreviousDots(currentPage, i, firstDotStartAt);
    if (shouldShowPreviousDots) {
      // output += `<a href="#" data-page="-1" class="btn btn-primary ${activeClass}">...</a>`;
      outputArr.push(`<a href="#" data-page="-1" class="btn btn-primary ${activeClass}">...</a>`);
      continue;
    }
    
    const shouldShowAfterDots = getShouldShowAfterDots(currentPage, i, lastDotStartAt);
    if (shouldShowAfterDots) {
      // output += `<a href="#" data-page="-1" class="btn btn-primary ${activeClass}">...</a>`;
      outputArr.push(`<a href="#" data-page="-1" class="btn btn-primary ${activeClass}">...</a>`);
      continue;
    }
    
    
    if (i === lastPage) {
      // output += `<a href="#" data-page="${i}" class="btn btn-primary ${activeClass}">${i}</a>`;
      outputArr.push(`<a href="#" data-page="${i}" class="btn btn-primary ${activeClass}">${i}</a>`);
      continue;
    }
    
    const shouldShowPageButton = getShouldShowPageButton(i, currentPage);
    if (shouldShowPageButton) {
      // output += `<a href="#" data-page="${i}" class="btn btn-primary ${activeClass}">${i}</a>`;   
      outputArr.push(`<a href="#" data-page="${i}" class="btn btn-primary ${activeClass}">${i}</a>`);
    } else {
      if (currentPage === firstPage + 3 && i === firstPage + 1) {
        // output += `<a href="#" data-page="${i}" class="btn btn-primary ${activeClass}">${i}</a>`;
        outputArr.push(`<a href="#" data-page="${i}" class="btn btn-primary ${activeClass}">${i}</a>`);
        continue;
      }
      
      if (currentPage === lastPage - 3 && i === lastPage - 1) {
        // output += `<a href="#" data-page="${i}" class="btn btn-primary ${activeClass}">${i}</a>`;
        outputArr.push(`<a href="#" data-page="${i}" class="btn btn-primary ${activeClass}">${i}</a>`);
        continue;
      }
      
    }
  }
  
  // Right arrow button
  const rightArrowData = getRightArrowData(lastPage, currentPage);
  let rightArrowButton = `<a href="#" data-page="${rightArrowData}" class="btn btn-primary"><i class="bi bi-arrow-right"></i></a>`;
  // output += rightArrowButton;
  outputArr.push(rightArrowButton);
  
  paginationContainer.innerHTML = outputArr.join('');
}

// Event handlers
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

// Initiate
if (totalPages > 0) {
  
  renderPagination();
  
  /* console.time("Join method");
  renderPagination();
  console.timeEnd("Join method"); */
  
  /* console.time("Concat method");
  renderPaginationWithConcat();
  console.timeEnd("Concat method"); */
}