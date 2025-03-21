using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class SAccessTran
{
    public decimal TransId { get; set; }

    public string? MenuName { get; set; }

    public string? Access { get; set; }
}
