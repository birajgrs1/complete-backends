const fs = require("fs");
const path = require("path");

// Reading chunks
const stream = fs.createReadStream(path.join(__dirname, "data.txt"));
// stream.on("data", (chunk) => {
//     console.log(chunk);
// });
//Buffering chunks
const body = [];
stream.on("data", (chunk) => {
    console.log(chunk);
    body.push(chunk);
});

stream.on("end", () => {
    console.log(Buffer.concat(body).toString());
});



const stream2 = fs.createReadStream(path.join(__dirname, "myDoc.doc"));
// stream2.on("data", (chunk) => {
//     console.log(chunk);
// });

//buffering for stream2

const body2 = [];
stream2.on("data", (chunk) => {
    body2.push(chunk);
    console.log(chunk);
});

stream2.on("end", () => {
    console.log(Buffer.concat(body2).toString());
});

/**
Streams: It is a sequence of data that can be read from or written to a file or other data source.
The use of streams makes it possible to read and write files, communicate over a network, or exchange any kind 
of information end-to-end.
In contrast to the conventional method of reading files into memory all at once, streams read data chunks piece
by piece and process them without storing the entire file in memory.
This makes streams extremely useful for working with enormous volumes of data. 
For instance, file size can exceed your available memory, making it difficult to handle it by reading the 
entire file into memory. Streams come to the rescue in this situation!
Larger files can be read by using streams to process data in smaller parts.

Why stream useful? 
It is useful because it allows you to read and write data in smaller chunks, 
which can be useful when working with large files or when dealing with data that is not easily stored in memory.

Chunks: 
It is a smaller piece of data that is read from or written to a file or other data source.
It helps to read and write data in smaller chunks, which can be useful when working with large files or 
when dealing with data that is not easily stored in memory.

Buffer: 
It is a temporary storage area for data that is being read from or written to a file or other data source.
It helps to read and write data in smaller chunks, which can be useful when working with large files or 
when dealing with data that is not easily stored in memory.

*/