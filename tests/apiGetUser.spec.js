// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('[API] User profile', () => {
  // Arrange
  const APITestUser = {
      userUsername: "someUsernameValue",
      email: 'andriistepura@gmail.com',
      userId: '1060115',
      pwd: 'Pa$$w0rd',
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTA2MDExNSwidG9rZW5JZCI6bnVsbCwidGltZSI6MTc2MDU3MTYwMCwiZXhwaXJlZEF0IjpudWxsLCJ0d29GYWN0b3IiOnsicGFzc2VkIjpmYWxzZX0sInJvbGVzIjp7fSwicm9sZVR5cGUiOjEsImFjY2Vzc1Rva2VuIjoiNjA0ZWE5N2JmMDMxYmFkMTlhN2VlMmY5Iiwic3RhdHVzIjoxMCwidHlwZSI6MSwiaXNUZWFtTWVtYmVyIjpmYWxzZX0.FWBfviaTcWCt9FsuURFNSNliP31oUWaYM_XSdW_y0ZM'
  };

  test('[API] GET User', async ({request}) => {
    // Act
    const res = await request.get('https://api.paydo.com/v1/users/'+APITestUser.userId, {
      headers: {
        'Token': APITestUser.token
      }
    });
    expect(res.status()).toBe(200);
    const data = await res.json();
    // console.log(data);    
    // response from https://api.paydo.com/v1/users/1060115 without age and username properties
    // {
    //   data: {
    //     id: '1060115',
    //     personalInformation: { email: 'andriistepura@gmail.com', phone: null },
    //     systemInformation: {
    //       roles: [Array],
    //       approvedStatus: 0,
    //       accessToken: '604ea97bf031bad19a7ee2f9'
    //     },
    //     type: 1,
    //     status: 10,
    //     dateTime: { createdAt: 1760389558, updatedAt: 1760571539 }
    //   },
    //   status: 1
    // }
    
    // Assert
    expect(data.data.id).toBe(APITestUser.userId);
    expect(data.data.personalInformation.email).toEqual(APITestUser.email);      
    expect(typeof(data.data.username)).toBe('string');
    // age should be int [1-100]
    expect(typeof(data.data.age)).toBe('number');
    expect(data.data.age >= 1 && data.data.age <= 100);
    // expect(data.data.type).toBe('boolean');
  })

  test('[API] POST User', async ({request}) => {
    // Act
    const res = await request.post('https://api.paydo.com/someunknownendpoint/',{
      data:{
          "username": APITestUser.userUsername,
          "age": 57,
          "user_type": true
      }
    });
    expect(res.status()).toBe(200);
    const data = await res.json();
    
    // Assert
    expect(data.data.user_id).toEqual(APITestUser.userId);
    expect(data.data.username).toEqual(APITestUser.userUsername);   
  })
});