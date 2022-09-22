import React from 'react';

const Controller = () => {
  return (
    <div className="fixed right-12 top-32 border-2">
      <div>
        <h1>Filter</h1>
        <select name="is_active">
          <option value={null}>all</option>
          <option value={true}>on</option>
          <option value={false}>off</option>
        </select>
        <select name="status">
          <option value={null}>all</option>
          <option value={9999}>관리자확인필요</option>
          <option value={1}>입금대기</option>
          <option value={2}>운용중</option>
          <option value={3}>투자중지</option>
          <option value={4}>해지</option>
        </select>
      </div>
      <div></div>
    </div>
  );
};

export default Controller;
