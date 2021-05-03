const {default: axios} = require('axios');
const Ajax = require("./async");

jest.mock('axios')

describe("Ajax: echo", () => {
  test("should return value async", async () => {
    const result = await Ajax.echo("data12");
    expect(result).toBe("data12");
  });

  test("should return value with promise", () => {
    return Ajax.echo("data12").then((data) => {
      expect(data).toBe("data12");
    });
  });

  test("should catch error with promise", () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  test("should catch error with promise", async () => {
    try {
      await Ajax.echo();
    } catch(e) {
      expect(e.message).toBe('error');
    }
  });
});

describe('Ajax: GET', () => {

  let response
  let todos

  beforeEach(()=>{
    todos = [
      {id: 1, title: 'Todo 1', completes: false}
    ]

    response = {
      data: {
        todos
      }
    }
  })
  
  test('should return data from backend', () => {
    axios.get.mockReturnValue(response)

    return Ajax.get().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })
});

