/*
let dbMap = new Map();

//dbMap has [string][array(string)] as key value pair
dbMap.set('white shirt', 
    ["https://www.thredup.com/product/women-white-house-black-market-white-short-sleeve-t-shirt/83702873?query_id=433195387835179008&result_id=433195392008486914",
     "https://www.depop.com/products/alicekemp17-stunning-90s-vintage-white-padded/"
     "https://www.thredup.com/product/women-cotton-old-navy-white-short-sleeve-t-shirt/84523392?query_id=433195387835179008&result_id=433195392008486914"]
);
*/

const request = require("request");
const cheerio = require("cheerio");
function getFull(id, callback) {
  request.get(`https://www.imdb.com/title/${id}/?ref_=fn_al_tt_1`, function(
    error,
    response,
    data
  ) {
    const $ = cheerio.load(data);
    callback(error, {
      story: $("div.inline:nth-child(3) > p:nth-child(1) > span:nth-child(1)")
        .text()
        .trim()
    });
  });
}