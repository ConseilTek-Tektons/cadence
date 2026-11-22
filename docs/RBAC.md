# Cadence role-based access control

Permissions are enforced in server routes through `hasEffectivePermission`, not hidden only in the interface. Owners and administrators receive `*`; other roles receive explicit capabilities.

| Role | Intended scope |
|---|---|
| `portfolio_manager` | Portfolios, boards, dependencies, automation, capacity, audit |
| `project_manager` | Assigned boards, items, workload, comments |
| `contributor` | Work items, comments, grounded assistance |
| `viewer` | Read and comment without administration |
| `auditor` | Read dashboards and audit history |

Default groups include `cadence-owners`, `cadence-admins`, `pmo-leads`, `project-managers`, `cadence-contributors`, `cadence-viewers`, and `internal-audit`. Unknown groups receive `viewer`. The database `role_policy` table supports tenant-specific overrides, and every change must be audited.
