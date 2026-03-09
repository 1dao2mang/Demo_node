describe('Basic Document Test', () => {
  it('should find the word hutech in the document', () => {
    // 1. Tạo một "document" (chuỗi văn bản)
    const document = "hutech";

    // 2. Định nghĩa từ cần tìm
    const wordToFind = "hutech";

    // 3. Kiểm tra xem từ đó có nằm trong văn bản không
    const isWordFound = document.includes(wordToFind);

    // 4. Khẳng định (Assert) rằng kết quả tìm kiếm phải là true (Đúng)
    expect(isWordFound).toBe(true);
  });
});
