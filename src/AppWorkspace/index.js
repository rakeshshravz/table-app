import Button from "@mui/joy/Button";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import TableTitleIcon from "../Icons/TableTitleIcon";
import ImportIcon from "../Icons/ImportIcon";
import TableViewIcon from "../Icons/TableViewIcon";
import SelectDownArrow from "../Icons/SelectDownArrow";
import SortIcon from "../Icons/SortIcon";
import ListIcon from "../Icons/ListIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import TableView from "./TableView";
import FilterIcon from "../Icons/FilterIcon";

const AppWorkspace = ({ isCollapsed, setIsCollapsed }) => {
  return (
    <div className={`app-workspace ${isCollapsed ? "collapsed" : ""}`}>
      <div class="table-head">
        <div class="table-title-box">
          <div class="table-icon">
            <TableTitleIcon />
          </div>
          <div class="table-title-text">Contacts</div>
        </div>
        <div class="table-actions">
          <Button
            sx={{
              backgroundColor: "#F4F5F7",
              color: "#3F3BE1",
              "&:hover": {
                backgroundColor: "#F2EDF5",
              },
            }}
            color="primary"
            disabled={false}
            loading={false}
            onClick={function () {}}
            variant="soft"
            startDecorator={<ImportIcon />}
          >
            Import
          </Button>
        </div>
      </div>
      <div class="table-body">
        <div class="table-controls">
          <div class="left-controls">
            <div class="controls-item" style={{ margin: 0 }}>
              <Select
                indicator={<SelectDownArrow />}
                color="neutral"
                variant="soft"
                size="sm"
                placeholder="Table view"
                startDecorator={<TableViewIcon />}
                sx={{
                  width: 135,
                }}
              >
                <Option value="dog">Table view</Option>
                <Option value="cat">Kanban view</Option>
                <Option value="fish">List view</Option>
                <Option value="bird">Grid view</Option>
              </Select>
            </div>
          </div>
          <div class="right-controls">
            <div class="controls-box">
              <div class="controls-item">
                <Button
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                  variant="soft"
                  color="neutral"
                  disabled={false}
                  loading={false}
                  onClick={function () {}}
                  startDecorator={<SortIcon />}
                  endDecorator={<ListIcon />}
                >
                  Sort
                </Button>
              </div>
              <div class="controls-item">
                <Button
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                  variant="soft"
                  color="neutral"
                  disabled={false}
                  loading={false}
                  onClick={function () {}}
                  startDecorator={<FilterIcon />}
                  endDecorator={<ListIcon />}
                >
                  Filter
                </Button>
              </div>
              <div class="controls-item">
                <Button
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                  variant="soft"
                  color="neutral"
                  disabled={false}
                  loading={false}
                  onClick={function () {}}
                  startDecorator={<SettingsIcon />}
                >
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
        <TableView />
      </div>
    </div>
  );
};

export default AppWorkspace;
