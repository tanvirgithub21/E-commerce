import { Button, Checkbox, Table, TextInput } from "flowbite-react";
import React from "react";
import { BiReset } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

const CardItems = () => {
  return (
    <div className="w-[55rem]">
      {/* top menu card items */}
      <div className="w-full bg-gray-100 px-2 py-2 mb-3 flex justify-between items-center">
        <h5 className="font-medium">All Items (2 items)</h5>
        <Button color="warning" size="sm">
          Reset <BiReset className="ml-1 text-xl" />
        </Button>
      </div>

      {/* all card items  */}
      <div>
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell className="!p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="!p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-wrap font-medium text-gray-900 dark:text-white flex justify-start items-center max-w-[18rem]">
                <img
                  className="w-14 h-14 mr-2"
                  src="https://static-01.daraz.com.bd/p/a7aaab402c7941ad49ef7148d99ec8fd.jpg"
                  alt="mobile"
                />
                <p className=" w-full break-words">
                  item Casing for Samsung Guru Music 2 Full Body{" "}
                </p>
              </Table.Cell>
              <Table.Cell>
                {" "}
                <span className="mr-1">$</span>
                <span>566</span>{" "}
              </Table.Cell>
              <Table.Cell>
                <Button.Group>
                  <Button color="gray">
                    <HiMinus />
                  </Button>
                  <Button color="gray" disabled={true}>
                    0
                  </Button>
                  <Button color="gray">
                    <BsPlusLg />
                  </Button>
                </Button.Group>
              </Table.Cell>
              <Table.Cell>
                <Button color="failure">
                  <MdDelete size="1.2rem" />
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default CardItems;
