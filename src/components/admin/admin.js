"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Admin() {
  const [dataBaiViet, setDataBaiViet] = useState([]);

  return (
    <>
      <div className="p-10">
        <table id="example" class="table table-striped">
          <thead>
            <tr>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Facebook</th>
              <th>Tiêu đề</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011-04-25</td>
              <td>
                <button className="btn btn-primary">Xem</button>
              </td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2011-07-25</td>
              <td>$170,750</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Facebook</th>
              <th>Tiêu đề</th>
              <th>Hành động</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
