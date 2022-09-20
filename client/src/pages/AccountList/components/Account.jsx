import React from 'react';

const Account = () => {
  return (
    <div className="border-2 w-[50vw] p-6 rounded-3xl ">
      <h1 className="border-b-2 pb-3 flex justify-between">
        <span>깃허브 증권</span>
        <span>Saving Account</span>
      </h1>
      <div className="flex  pt-6 justify-between">
        <div className="w-1/2">
          <div className="border-b-2 p-1 space-y-3">
            <div className="w-full flex justify-between">
              계좌번호 <span className="font-bold">123-14556-12345</span>
            </div>
            <div className="text-end">
              <span>
                <span className="font-bold">김명원</span> 님
              </span>
            </div>
          </div>
          <div className=" pt-8">
            <div>
              계좌개설일: <span>2022-09-20</span>
            </div>
            <div>
              계좌 상태: <span>해지</span>
            </div>
            <div className="flex items-center">계좌 활성화 여부: on</div>
          </div>
        </div>
        <div className="space-y-2 w-1/2 ml-10 mt-20">
          <div className="text-end">
            평가 금액: <span>100000000원</span>
          </div>
          <div className="text-end">
            입금 금액: <span>900000000원</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
