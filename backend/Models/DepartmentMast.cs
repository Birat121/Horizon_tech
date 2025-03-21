using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class DepartmentMast
{
    public decimal TransId { get; set; }

    public string DeptId { get; set; } = null!;

    public string DeptName { get; set; } = null!;

    public string EnteredBy { get; set; } = null!;

    public string EnteredSys { get; set; } = null!;

    public DateTime EnteredDate { get; set; }
}
